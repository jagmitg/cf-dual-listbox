import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Field from "./Field";

vi.mock("react-dual-listbox/lib/react-dual-listbox.css", () => ({}));
vi.mock("@fortawesome/fontawesome-free/css/all.min.css", () => ({}));

vi.mock("react-dual-listbox", () => ({
    __esModule: true,
    default: () => <div>Mock DualListBox</div>
}));

vi.mock("@contentful/react-apps-toolkit", () => {
    const sdk = {
        window: { startAutoResizer: vi.fn() },
        field: {
            getValue: vi.fn().mockReturnValue([]),
            setValue: vi.fn().mockResolvedValue(undefined)
        },
        parameters: {
            instance: {
                enableFiltering: false,
                showOrderButtons: false
            }
        }
    };
    return {
        useSDK: () => sdk,
        useCMA: () => ({})
    };
});

describe("Field component", () => {
    it("renders the Clear Selection button", () => {
        const { getByText } = render(<Field />);
        expect(getByText("Clear Selection")).toBeTruthy();
    });
});
