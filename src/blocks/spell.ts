import * as Blockly from 'blockly/core';

/**
 * Hello future developer
 * 
 * I developed all the SPELL block on file because that way is easier to import them
 * and you only work with one object on index.ts. This might be a bad decision but is the 
 * one I took.
 * 
 * For the rest i tried to make representative names so that they can be easily found on
 * a search. I recomend the use o the block factory refered on the README for further delopment.
 */

const step = {
  "type": "Step",
  "tooltip": "Stablishes the begining of a procedure",
  "helpUrl": "",
  "message0": "Step - ID: %1 Title: %2",
  "args0": [
    {
      "type": "input_value",
      "name": "Id",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "Title",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#e60000',
  "inputsInline": true
}

const goTo = {
  "type": "GoTo",
  "tooltip": "Jumps to the start of a procedure",
  "helpUrl": "",
  "message0": "GoTo - ID: %1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "ID",
      "text": "default"
    },
    {
      "type": "input_dummy",
      "name": "dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#e60000'
}

const finish = {
  "type": "Finish",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Finish - Message: %1 Nominal = %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "nominal",
      "check": "Boolean"
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#e60000'
}

const promp = {
  "type": "Promp",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Promp -  Type = %1 Message %2 List %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "Ok",
          "OK"
        ],
        [
          "Cancel",
          "CANCEL"
        ],
        [
          "Ok_Cancel",
          "OK_CANCEL"
        ],
        [
          "Yes",
          "YES"
        ],
        [
          "No",
          "NO"
        ],
        [
          "Yes_No",
          "YES_NO"
        ],
        [
          "Alpha",
          "ALPHA"
        ],
        [
          "Num",
          "NUM"
        ],
        [
          "Date",
          "DATE"
        ],
        [
          "List",
          "LIST"
        ],
        [
          "List | Num",
          "LIST|NUM"
        ],
        [
          "List | Alpha",
          "LIST|ALPHA"
        ],
        [
          "File",
          "FILE_SELECTION"
        ],
        [
          "Password",
          "PASSWORD"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "message",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "list",
      "align": "RIGHT",
      "check": "Array"
    }
  ],
  "output": null,
  "colour": '#e60000',
  "inputsInline": true
}

const setLink = {
  "type": "setLink",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Set Link - Logical Resource ID:  %1 Enable: %2 %3 Channel: %4 Protocol: %5 Carrier: %6 %7",
  "args0": [
    {
      "type": "input_value",
      "name": "logicalResourceID",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "enable",
      "options": [
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "input_end_row",
      "name": "enable"
    },
    {
      "type": "input_value",
      "name": "channel",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "protocol",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "carrier",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "input_end_row",
      "name": "carrier"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#e60000'
}

const getTM = {
  "type": "getTM",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Get TM - TM Parameter: %1 Wait: %2 %3 Timeout: %4 Value Format: %5 Extended: %6 %7",
  "args0": [
    {
      "type": "input_value",
      "name": "tmParameter",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "wait",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    },
    {
      "type": "input_value",
      "name": "timeout",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "valueFormat",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "Raw",
          "RAW"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "extended",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "FALSE"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "NAME2"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#e60000'
}

const comparison = {
  "type": "comparison",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Comparison - Param:  %1 %2 %3 Value %4 Second value: %5 %6 Delay: %7 Timeout: %8 Retries: %9 %10 Tolerance %11 %12 Value Format: %13 Wait: %14 On failure: %15 %16",
  "args0": [
    {
      "type": "input_value",
      "name": "param",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "operation",
      "options": [
        [
          "Equal to",
          "eq"
        ],
        [
          "Greater or equal to",
          "ge"
        ],
        [
          "Greater than",
          "gt"
        ],
        [
          "Less o equal than",
          "le"
        ],
        [
          "Less than",
          "lt"
        ],
        [
          "Not equal to",
          "neq"
        ],
        [
          "Between",
          "bw"
        ],
        [
          "Not between",
          "nbw"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "operation"
    },
    {
      "type": "input_value",
      "name": "value",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "secondValue",
      "check": "String"
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    },
    {
      "type": "field_number",
      "name": "delay",
      "value": 0,
      "min": 0,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "timeout",
      "value": 0,
      "min": 0,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "retries",
      "value": 0,
      "min": 0,
      "precision": 1
    },
    {
      "type": "input_dummy",
      "name": "options"
    },
    {
      "type": "input_value",
      "name": "tolerance"
    },
    {
      "type": "input_end_row",
      "name": "NAME2"
    },
    {
      "type": "field_dropdown",
      "name": "valueFormat",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "Raw",
          "RAW"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "wait",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "failure",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "Abort",
          "ABORT"
        ],
        [
          "Recheck",
          "RECHECK"
        ],
        [
          "Cancel",
          "CANCEL"
        ],
        [
          "Skip",
          "SKIP"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "moreOptions"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#8c8c8c',
  "inputsInline": true
}

const verify = {
  "type": "verify",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Verify %1 Delay: %2 Timeout: %3 Retries: %4 %5 Tolerance %6 %7 Value Format: %8 Wait: %9 On failure: %10 On false: %11 Prompt user: %12 %13",
  "args0": [
    {
      "type": "input_statement",
      "name": "statements",
      "check": "comparison"
    },
    {
      "type": "field_number",
      "name": "delay",
      "value": 0,
      "min": 0,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "timeout",
      "value": 0,
      "min": 0,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "retries",
      "value": 0,
      "min": 0,
      "precision": 1
    },
    {
      "type": "input_dummy",
      "name": "options"
    },
    {
      "type": "input_value",
      "name": "tolerance"
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    },
    {
      "type": "field_dropdown",
      "name": "valueFormat",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "Raw",
          "RAW"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "wait",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "failure",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "Abort",
          "ABORT"
        ],
        [
          "Recheck",
          "RECHECK"
        ],
        [
          "Cancel",
          "CANCEL"
        ],
        [
          "Skip",
          "SKIP"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "onFalse",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "Abort",
          "ABORT"
        ],
        [
          "Recheck",
          "RECHECK"
        ],
        [
          "Cancel",
          "CANCEL"
        ],
        [
          "Skip",
          "SKIP"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "prompt",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "moreOptions"
    }
  ],
  "output": null,
  "colour": '#e60000',
  "inputsInline": true
}

const subscription = {
  "type": "subscription",
  "tooltip": "",
  "helpUrl": "",
  "message0": "TM Packets - Type: %1 Value: %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "Spids",
          "spids"
        ],
        [
          "Apids",
          "apids"
        ],
        [
          "Mnemonic",
          "mnemonic"
        ],
        [
          "Pustype",
          "pustype"
        ],
        [
          "Pussubtype",
          "pussubtype"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "value"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#8c8c8c',
  "inputsInline": true
}

const subscribeTMPackets = {
  "type": "subscribeTMPackets",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Subscribe TM Packets %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "subscriptions"
    }
  ],
  "output": null,
  "colour": '#e60000'
}

const getTMPackets = {
  "type": "getTMPackets",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Get Received TM Packets - Session ID: %1",
  "args0": [
    {
      "type": "input_value",
      "name": "sessionID"
    }
  ],
  "output": null,
  "colour": '#e60000'
}

const unsusbscribeTM = {
  "type": "unsusbscribeTM",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Unsubscribe TM Packets - Session ID %1",
  "args0": [
    {
      "type": "input_value",
      "name": "sessionID"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#e60000'
}

const send = {
  "type": "send",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Send - Command: %1 Args: %2 Time: %3 Release Time: %4 Load Only: %5 %6 Confirm: %7 %8 Confirm Critical: %9 %10 %11 Secuence:  %12 Stackfile:  %13 Group array: %14 Group?: %15 %16 Block: %17 %18 Timeout: %19 %20 Command Exec verification: %21 %22 Skip Verification: %23 %24 %25 Dynamic PTV: %26 %27 Static PTV: %28 %29 Send delay: %30",
  "args0": [
    {
      "type": "input_value",
      "name": "command",
      "check": "String"
    },
    {
      "type": "input_statement",
      "name": "args"
    },
    {
      "type": "input_value",
      "name": "time"
    },
    {
      "type": "input_value",
      "name": "releaseTime"
    },
    {
      "type": "field_dropdown",
      "name": "loadOnly",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "loadOnly"
    },
    {
      "type": "field_dropdown",
      "name": "confirm",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "confirm"
    },
    {
      "type": "field_dropdown",
      "name": "confirmCritical",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "confirmCritical"
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    },
    {
      "type": "input_value",
      "name": "sequence",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "stackfile",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "group",
      "check": "Array"
    },
    {
      "type": "field_dropdown",
      "name": "groupBool",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "groupBool"
    },
    {
      "type": "input_value",
      "name": "block",
      "check": "Array"
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    },
    {
      "type": "field_number",
      "name": "timeout",
      "value": 0,
      "min": 0,
      "precision": 1
    },
    {
      "type": "input_dummy",
      "name": "timeout"
    },
    {
      "type": "field_dropdown",
      "name": "cev",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "cev"
    },
    {
      "type": "field_dropdown",
      "name": "skipVer",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "skipVer"
    },
    {
      "type": "input_end_row",
      "name": "NAME"
    },
    {
      "type": "field_dropdown",
      "name": "dynamicPtv",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "dynamicPtv"
    },
    {
      "type": "field_dropdown",
      "name": "staticPtv",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "True",
          "True"
        ],
        [
          "False",
          "False"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "staticPtv"
    },
    {
      "type": "input_value",
      "name": "sendDelay"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#e60000',
  "inputsInline": true
}

const argument = {
  "type": "commandArg",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Argument - Name: %1 Value: %2 Value Format: %3 %4 Radix: %5 %6",
  "args0": [
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "value"
    },
    {
      "type": "field_dropdown",
      "name": "valueFormat",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "Raw",
          "RAW"
        ],
        [
          "Eng",
          "ENG"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "valueFormat"
    },
    {
      "type": "field_dropdown",
      "name": "radix",
      "options": [
        [
          "---",
          "---"
        ],
        [
          "Decimal",
          "DEC"
        ],
        [
          "Hexadecimal",
          "HEX"
        ],
        [
          "Octal",
          "OCT"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "name": "radix"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": '#8c8c8c',
  "inputsInline": true
}

export const blocksSpell = Blockly.common.createBlockDefinitionsFromJsonArray([step, goTo, finish, promp, setLink, getTM, comparison,
                                                                               verify, subscribeTMPackets, subscription, getTMPackets,
                                                                               unsusbscribeTM, send, argument]);