/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/python';
import * as Blockly from 'blockly/core';

/**
 * I used the same logic here as in spell.ts
 * 
 * Also there might be easier ways to implement the code generation but
 * the muses did not grant me that inspiration.
 */

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

/*forBlock['add_text'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  const color =
    generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#ffffff'";

  const addText = generator.provideFunction_(
    'addText',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text, color) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = text;
  textEl.style.color = color;
  outputDiv.appendChild(textEl);
}`
  );
  // Generate the function call for this block.
  const code = `${addText}(${text}, ${color});\n`;
  return code;
};*/

forBlock['GoTo'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const text_id = block.getFieldValue('ID');

  const code = `GoTo(${text_id})\n`;
  return code;
}

forBlock['Step'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const value_id = generator.valueToCode(block, 'Id', Order.ATOMIC) || "ID";

  const value_title = generator.valueToCode(block, 'Title', Order.ATOMIC) || "Title";

  const code = `Step(${value_id},${value_title})\n`;
  return code;
}

forBlock['Finish'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const value_message = generator.valueToCode(block, 'message', Order.ATOMIC);

  const value_nominal = generator.valueToCode(block, 'nominal', Order.ATOMIC);

  const code = `Finish(${value_message ? `${value_message}` : ""}${value_message && value_nominal ? ", " : ""}${value_nominal ? `Nominal=${value_nominal}` : ""})\n`;
  return code;
}

forBlock['Promp'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const dropdown_type = block.getFieldValue('type');
  const value_message = generator.valueToCode(block, 'message', Order.ATOMIC) || "Message";

  const value_list = generator.valueToCode(block, 'list', Order.ATOMIC);

  const code = `Promp(${value_message}${value_list ? `, ${value_list}` : ""}${ value_list ? `, Type=${dropdown_type}` : `, ${dropdown_type}`})\n`;
  return [code, Order.NONE];
}

forBlock['setLink'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const value_logicalresourceid = generator.valueToCode(block, 'logicalResourceID', Order.ATOMIC) || "'LogicalResourceID'";

  const dropdown_enable = block.getFieldValue('enable');

  const value_channel = generator.valueToCode(block, 'channel', Order.ATOMIC);

  const value_protocol = generator.valueToCode(block, 'protocol', Order.ATOMIC);

  const dropdown_carrier = block.getFieldValue('carrier');

  const extraArgs = value_channel || value_protocol || dropdown_carrier !== "---";

  const channelText = value_channel ? `'Channel': ${value_channel}` : "";
  const protocolText = value_protocol ? `'Protocol': ${value_protocol}` : "";
  const carrierText = dropdown_carrier !== "---" ? `'Carrier': '${dropdown_carrier}'` : "";

  var res = ", {"
  if(extraArgs){

    res += channelText;
    res += value_channel && (value_protocol || (dropdown_carrier !== "---")) ? "," : "";
    res += protocolText;
    res += value_protocol && (dropdown_carrier !== "---") ? "," : "";
    res += carrierText;

  }
  res += "}"

  const code = `SetLink(${value_logicalresourceid}, ${dropdown_enable}${ extraArgs ? `${res}` : ""})\n`;
  return code;
}

forBlock['getTM'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const value_tmparameter = generator.valueToCode(block, 'tmParameter', Order.ATOMIC) || "'Parameter'";

  const dropdown_wait = block.getFieldValue('wait');

  const number_timeout = block.getFieldValue('timeout');
  const dropdown_valueformat = block.getFieldValue('valueFormat');
  const dropdown_extended = block.getFieldValue('extended');

  const code = `GetTM(${value_tmparameter}${dropdown_wait !== "---" ? `, Wait = ${dropdown_wait}` : ""}`+
                    `${number_timeout > 0 ? `, Timeout = ${number_timeout}` : ""}${dropdown_valueformat !== "---" ? `, ValueFormat = ${dropdown_valueformat}` : ""}`+
                    `${dropdown_extended !== "---" ? `, Extended = ${dropdown_extended}` : ""})\n`;
  return code;
}

forBlock['comparison'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {

  const value_param = generator.valueToCode(block, 'param', Order.ATOMIC) || "'ParamName'";

  const dropdown_operation = block.getFieldValue('operation');

  const value_value = generator.valueToCode(block, 'value', Order.ATOMIC)  || "'Value'";

  const value_secondvalue = generator.valueToCode(block, 'secondValue', Order.ATOMIC)   || "'SecondValue'";

  const number_delay = block.getFieldValue('delay');
  const number_timeout = block.getFieldValue('timeout');
  const number_retries = block.getFieldValue('retries');

  const value_tolerance = generator.valueToCode(block, 'tolerance', Order.ATOMIC);

  const dropdown_valueformat = block.getFieldValue('valueFormat');
  const dropdown_wait = block.getFieldValue('wait');
  const dropdown_failure = block.getFieldValue('failure');

  var thereIsOptions = number_delay > 0 || number_timeout > 0 || number_retries > 0 || value_tolerance || dropdown_valueformat !== "---" || dropdown_wait !== "---" || dropdown_failure !== "---";
  var options = "{";

  if(thereIsOptions){

    const delayText = number_delay > 0 ? `Delay = ${number_delay}` : "";
    const timeoutText = number_timeout > 0 ? `Timeout = ${number_timeout}` : "";
    const retriesText = number_retries > 0 ? `Retries = ${number_retries}` : "";

    const toleranceText = value_tolerance ? `Tolerance = ${value_tolerance}` : "";

    const valueFormatText = dropdown_valueformat !== "---" ? `ValueFormat = ${dropdown_valueformat}` : "";
    const waitText = dropdown_wait !== "---" ? `Wait = ${dropdown_wait}` : "";
    const failureText = dropdown_failure !== "---" ? `OnFailure = ${dropdown_failure}` : "";

    const values = [delayText, timeoutText, retriesText, toleranceText, valueFormatText, waitText, failureText]

    values.filter(elem => elem !== "").forEach(elem => options += (elem + ", "))
    options = options.substring(0,options.lastIndexOf(", "))
  }
  options += "}"

  const code = `[${value_param}, ${dropdown_operation}, ${value_value}${["bw","nbw"].includes(dropdown_operation) ? `, ${value_secondvalue}` : ""}${thereIsOptions ? `, ${options}` : ""}]\n`;
  return code;
}

forBlock['verify'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const statement_statements = generator.statementToCode(block, 'statements');

  const number_delay = block.getFieldValue('delay');
  const number_timeout = block.getFieldValue('timeout');
  const number_retries = block.getFieldValue('retries');

  const value_tolerance = generator.valueToCode(block, 'tolerance', Order.ATOMIC);

  const dropdown_valueformat = block.getFieldValue('valueFormat');
  const dropdown_wait = block.getFieldValue('wait');
  const dropdown_failure = block.getFieldValue('failure');
  const dropdown_onfalse = block.getFieldValue('onFalse');
  const dropdown_prompt = block.getFieldValue('prompt');

  var thereIsOptions = number_delay > 0 || number_timeout > 0 || number_retries > 0 || value_tolerance || dropdown_valueformat !== "---" || dropdown_wait !== "---" || dropdown_failure !== "---" || dropdown_onfalse !== "---" || dropdown_prompt !== "---";
  var options = "";

  if(thereIsOptions){

    const delayText = number_delay > 0 ? `Delay = ${number_delay}` : "";
    const timeoutText = number_timeout > 0 ? `Timeout = ${number_timeout}` : "";
    const retriesText = number_retries > 0 ? `Retries = ${number_retries}` : "";

    const toleranceText = value_tolerance ? `Tolerance = ${value_tolerance}` : "";

    const valueFormatText = dropdown_valueformat !== "---" ? `ValueFormat = ${dropdown_valueformat}` : "";
    const waitText = dropdown_wait !== "---" ? `Wait = ${dropdown_wait}` : "";
    const failureText = dropdown_failure !== "---" ? `OnFailure = ${dropdown_failure}` : "";
    const onFalseText = dropdown_onfalse !== "---" ? `OnFalse = ${dropdown_onfalse}` : "";
    const proptText = dropdown_prompt !== "---" ? `PromptUser = ${dropdown_prompt}` : "";

    const values = [delayText, timeoutText, retriesText, toleranceText, valueFormatText, waitText, failureText, onFalseText, proptText]

    values.filter(elem => elem !== "").forEach(elem => options += (elem + ", "))
    options = options.substring(0,options.lastIndexOf(", "))
  }

  var statements = statement_statements.split("\n").map((elem) => elem.trim());
  statements.pop()
  var statementsText = ""

  if (statements.length > 1){

    statementsText = statements.reduce((acc, elem) => acc += `${elem}, `, statementsText + "[");
    statementsText = statementsText.substring(0,statementsText.lastIndexOf(", "));
    statementsText += "]";

  }else{
    statementsText = statements[0]
  }
  
  const code = `Verify(${statementsText}${thereIsOptions ? `, ${options}` : ""})\n`;
  return [code, Order.NONE];
}

forBlock['subscription'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const dropdown_type = block.getFieldValue('type');
  const value_value = generator.valueToCode(block, 'value', Order.ATOMIC);

  const code = `'${dropdown_type}': ${value_value}\n`;
  return code;
}

forBlock['subscribeTMPackets'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const statement_subscrptions = generator.statementToCode(block, 'subscriptions');

  var statements = statement_subscrptions.split("\n").map((elem) => elem.trim());
  statements.pop()

  var resText = ""
  if (statements.length > 0){
    resText = statements.reduce((acc, elem) => acc += `${elem}, `, "{");
    resText = resText.substring(0,resText.lastIndexOf(", "));
    resText += "}";
  }

  const code = `SubscribeTmPackets(${resText})`;
  return [code, Order.NONE];
}

forBlock['getTMPackets'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const value_sessionid = generator.valueToCode(block, 'sessionID', Order.ATOMIC) || "SessionIDPlaceholder";

  const code = `GetReceivedTmPackets(${value_sessionid})`;
  return [code, Order.NONE];
}

forBlock['unsusbscribeTM'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const value_sessionid = generator.valueToCode(block, 'sessionID', Order.ATOMIC) || "'SessionIDPlaceholder'";

  const code = `UnsubscribeTmPackets(${value_sessionid})`;
  return code;
}

forBlock['send'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {

  const value_command = generator.valueToCode(block, 'command', Order.ATOMIC);

  const statement_args = generator.statementToCode(block, 'args');

  const value_time = generator.valueToCode(block, 'time', Order.ATOMIC);

  const value_releasetime = generator.valueToCode(block, 'releaseTime', Order.ATOMIC);

  const dropdown_loadonly = block.getFieldValue('loadOnly');

  const dropdown_confirm = block.getFieldValue('confirm');

  const dropdown_confirmcritical = block.getFieldValue('confirmCritical');

  const value_sequence = generator.valueToCode(block, 'sequence', Order.ATOMIC);

  const value_stackfile = generator.valueToCode(block, 'stackfile', Order.ATOMIC);

  const value_group = generator.valueToCode(block, 'group', Order.ATOMIC);

  const dropdown_groupbool = block.getFieldValue('groupBool');

  const value_block = generator.valueToCode(block, 'block', Order.ATOMIC);

  const number_timeout = block.getFieldValue('timeout');

  const dropdown_cev = block.getFieldValue('cev');

  const dropdown_skipver = block.getFieldValue('skipVer');

  const dropdown_dynamicptv = block.getFieldValue('dynamicPtv');

  const dropdown_staticptv = block.getFieldValue('staticPtv');

  const value_senddelay = generator.valueToCode(block, 'sendDelay', Order.ATOMIC);

  var res = ""
  
  const command = value_command ? `command = ${value_command}` : "command = 'CommandToSend'";
  const time = value_time ? `Time = ${value_time}` : "";
  const releaseTime = value_releasetime ? `ReleaseTime = ${value_releasetime}` : "";
  const loadOnly = dropdown_loadonly !== "---" ? `LoadOnly = ${dropdown_loadonly}` : "";
  const confirm = dropdown_confirm !== "---" ? `Confirm = ${dropdown_confirm}` : "";
  const confirmCritical = dropdown_confirmcritical !== "---" ? `ConfirmCritical = ${dropdown_confirmcritical}` : "";
  const sequence = value_sequence ? `sequence = ${value_sequence}` : "";
  const stackfile = value_stackfile ? `stackfile = ${value_stackfile}` : "";
  const group = value_group ? `group = ${value_group}` : "";
  const groupBool = dropdown_groupbool !== "---" ? `Group = ${dropdown_groupbool}` : "";
  const blockVal = value_block ? `Block = ${value_block}` : "";
  const timeout = number_timeout > 0 ? `Timeout = ${number_timeout}` : "";
  const cev = dropdown_cev !== "---" ? `cev = ${dropdown_cev}` : "";
  const skipVer = dropdown_skipver !== "---" ? `SkipVerification = ${dropdown_skipver}` : "";
  const dynamicptv = dropdown_dynamicptv !== "---" ? `DynamicPtv = ${dropdown_dynamicptv}` : "";
  const staticptv = dropdown_staticptv !== "---" ? `StaticPtv = ${dropdown_staticptv}` : "";
  const sendDelay = value_senddelay ? `SendDelay = ${value_senddelay}` : "";

  var statements = statement_args.split("\n").map((elem) => elem.trim());
  statements.pop()
  var statementsText = ""

  if (statements.length > 0){
    statementsText = statements.reduce((acc, elem) => acc += `${elem}, `, statementsText + "args = [");
    statementsText = statementsText.substring(0,statementsText.lastIndexOf(", "));
    statementsText += "]";
  }

  var options = [command, time, statementsText, releaseTime, loadOnly, confirm, confirmCritical, sequence, stackfile, group, groupBool, blockVal, timeout, cev, skipVer, dynamicptv, staticptv, sendDelay]

  options.filter(elem => elem !== "").forEach(elem => res += (elem+", "))
  res = res.substring(0,res.lastIndexOf(", "));

  const code = `Send(${res})\n`;
  return code;
}

forBlock['commandArg'] = function(
  block: Blockly.Block,
  generator: Blockly.CodeGenerator
) {
  const value_name = generator.valueToCode(block, 'name', Order.ATOMIC) || "'ArgN'";

  const value_value = generator.valueToCode(block, 'value', Order.ATOMIC)  || "'Value'";

  const dropdown_valueformat = block.getFieldValue('valueFormat');

  const dropdown_radix = block.getFieldValue('radix');

  const isThereOptions = dropdown_valueformat !== "---" || dropdown_radix !== "---";

  const valueFormat = dropdown_valueformat ? `ValueFormat = ${dropdown_valueformat}` : "";
  const radix = dropdown_radix ? `Radix = ${dropdown_radix}` : "";

  var res = "{";
  var options = [valueFormat,radix];
  options.filter(elem => elem !== "").forEach(elem => res += (elem+", "))
  res = res.substring(0,res.lastIndexOf(", "));
  res += "}"

  const code = `[${value_name}, ${value_value}${isThereOptions ? `, ${res}` : ""}]\n`;
  return code;
}