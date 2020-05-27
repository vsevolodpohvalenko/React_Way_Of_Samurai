import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "../components/Profile/MyPosts/Profileinfo/ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status = "it-kamasutra.com"/>);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("it-kamasutra.com");
    });
    test("AllRight with span", () => {
        const component = create(<ProfileStatus status = "it-kamasutra.com"/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[1]).toBe("it-kamasutra.com");
    });
    test("AllRight with input", () => {
        const component = create(<ProfileStatus status = "it-kamasutra.com"/>);
        const root = component.root;
        expect(() =>{
            const input = root.findByType("input")
        }).toThrow()
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status = "it-kamasutra.com"/>);
        const root = component.root;
        const span = root.findByType("span")
        span.props.onClick();
        const input = root.findByType("input")
        expect(input.props.value).toBe("it-kamasutra.com");
    });
    test("callback should be called", () => {
        const  mockCallback = jest.fn()
        const component = create(<ProfileStatus status = "it-kamasutra.com" updateStatus={mockCallback}/>);
        const instance = component.getInstance()
        instance.deactivateEditMode()

        expect(mockCallback.mock.calls.length).toBe(1);
    });
  });