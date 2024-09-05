/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
//import {blocks} from './blocks/text';
import {blocksSpell} from './blocks/spell';
import {forBlock} from './generators/python';
import {pythonGenerator} from 'blockly/python';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';


// Register the blocks and generator with Blockly
//Blockly.common.defineBlocks(blocks); // Commented for being an example but relevant
Blockly.common.defineBlocks(blocksSpell);
Object.assign(pythonGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode')?.firstChild;
//const outputDiv = document.getElementById('output'); // Commented for being an example but relevant
const blocklyDiv = document.getElementById('blocklyDiv');
const exportButton = document.getElementById('exportButton');
const ws = blocklyDiv && Blockly.inject(blocklyDiv, {toolbox});

function download(filename:string, text:string) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

exportButton?.addEventListener("click", (event:Event) => {

  if (codeDiv) {
    
    download("code.py",codeDiv.textContent || "")
  }

})

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
const runCode = () => {
  const code = pythonGenerator.workspaceToCode(ws);
  if (codeDiv) codeDiv.textContent = code;

  //if (outputDiv) outputDiv.innerHTML = ''; // Commented for being an example but relevant

  /*exec(`python3 -c ${code}`, (error: ExecException | null, stdout: string, stderr: string) => {
    if (error) {
      console.log(`error: ${error.message}`);
    }
    else if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    else {
      console.log(stdout);
    }
  })*/

  //eval(code)
};

if (ws) {
    // Load the initial state from storage and run the code.
  load(ws);
  runCode();

  // Every time the workspace changes state, save the changes to storage.
  ws.addChangeListener((e: Blockly.Events.Abstract) => {
    // UI events are things like scrolling, zooming, etc.
    // No need to save after one of these.
    if (e.isUiEvent) return;
    save(ws);
  });


  // Whenever the workspace changes meaningfully, run the code again.
  ws.addChangeListener((e: Blockly.Events.Abstract) => {
    // Don't run the code when the workspace finishes loading; we're
    // already running it once when the application starts.
    // Don't run the code during drags; we might have invalid state.
    if (e.isUiEvent || e.type == Blockly.Events.FINISHED_LOADING ||
      ws.isDragging()) {
      return;
    }
    runCode();
  });
}
