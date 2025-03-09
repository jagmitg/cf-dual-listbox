import React, { useState, useEffect } from "react";
import { FieldAppSDK } from "@contentful/app-sdk";
import { useSDK } from "@contentful/react-apps-toolkit";
import DualListBox, { Option } from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";
import { Stack, Button, Note } from "@contentful/f36-components";
import { getOptions } from "../utils";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface ParametersInstance {
    enableFiltering: boolean;
    showOrderButtons: boolean;
}

const Field: React.FC = () => {
    const sdk = useSDK<FieldAppSDK>();
    const [selected, setSelected] = useState<string[]>([]);
    const [options, setOptions] = useState<Option<string>[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [enableFiltering, setEnableFiltering] = useState(false);
    const [showOrderButtons, setShowOrderButtons] = useState(false);

    useEffect(() => {
        sdk.window.startAutoResizer();

        const fieldValue = sdk.field.getValue() as string[];
        if (fieldValue) {
            setSelected(fieldValue);
        }

        const fetchedOptions = getOptions(sdk.field).map((option) => ({
            value: option.value as string,
            label: option.label
        }));
        setOptions(fetchedOptions);

        const instanceParameters = sdk.parameters.instance as ParametersInstance;
        setEnableFiltering(instanceParameters.enableFiltering || false);
        setShowOrderButtons(instanceParameters.showOrderButtons || false);
    }, [sdk]);

    const onChange = (newSelected: string[]) => {
        setSelected(newSelected);
        sdk.field.setValue(newSelected).catch((error: Error) => setError(error.message));
    };

    return (
        <Stack flexDirection="column" alignItems="flex-start">
            <style>
                {`
          .react-dual-listbox {
            width: 100%;
          }
          .rdl-filter, .rdl-control {
            border-radius: 6px;
            box-shadow: rgba(225, 228, 232, 0.2) 0px 2px 0px inset;
            background-color: rgb(255, 255, 255);
            border: 1px solid rgb(207, 217, 224);
            color: rgb(65, 77, 99);
          }
          .react-dual-listbox button,
          .react-dual-listbox select {
            border-radius: 6px;
            border: 1px solid rgb(207, 217, 224);
          }
        `}
            </style>
            {error && <Note variant="negative">{error}</Note>}
            {
                // @ts-ignore - Known TS mismatch with react-dual-listbox
                <DualListBox
                    options={options}
                    selected={selected}
                    onChange={onChange}
                    canFilter={enableFiltering}
                    preserveSelectOrder={showOrderButtons}
                    showOrderButtons={showOrderButtons}
                />
            }
            <Button onClick={() => onChange([])} isDisabled={selected.length === 0}>
                Clear Selection
            </Button>
        </Stack>
    );
};

export default Field;
