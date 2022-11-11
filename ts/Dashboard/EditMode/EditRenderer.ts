import EditMode from './EditMode.js';
import EditGlobals from '../EditMode/EditGlobals.js';
import U from '../../Core/Utilities.js';
import type CSSObject from '../../Core/Renderer/CSSObject';
import { HTMLDOMElement } from '../../Core/Renderer/DOMElementType.js';

const {
    createElement
} = U;

class EditRenderer {
    /* *
    *
    *  Constructor
    *
    * */
    constructor(
        editMode: EditMode
    ) {
        this.editMode = editMode;
    }

    /* *
    *
    *  Properties
    *
    * */
    public editMode: EditMode;

    /* *
    *
    *  Functions
    *
    * */
    public renderContextButton(
        parentNode: HTMLDOMElement
    ): HTMLDOMElement|undefined {
        const editMode = this.editMode;

        let ctxBtnElement;

        if (editMode.options.contextMenu) {
            ctxBtnElement = createElement(
                'div', {
                    className: EditGlobals.classNames.contextMenuBtn,
                    onclick: function (): void {
                        editMode.onContextBtnClick(editMode);
                    }
                }, {}, parentNode
            );
            ctxBtnElement.style.background = 'url(' +
                editMode.options.contextMenu.icon +
            ') no-repeat 50% 50%';
        }

        return ctxBtnElement;
    }

    public static renderSelect(
        options: Array<string>,
        parentElement: HTMLDOMElement
    ): HTMLDOMElement|undefined {
        let customSelect;

        if (parentElement) {
            customSelect = createElement(
                'select',
                {
                    className: EditGlobals.classNames.customSelect
                },
                {},
                parentElement
            );

            for (let i = 0, iEnd = options.length; i < iEnd; ++i) {
                createElement(
                    'option',
                    {},
                    {},
                    customSelect
                );
            }
        }

        return customSelect;
    }

    public static renderToggle(
        parentElement: HTMLDOMElement,
        options: FormField
    ): HTMLDOMElement|undefined {
        let toggle;

        if (parentElement) {

            if (options.title) {
                EditRenderer.renderText(
                    parentElement,
                    options.title
                );
            }

            toggle = createElement(
                'label',
                {
                    className: EditGlobals.classNames.toggleWrapper
                },
                {},
                parentElement
            );

            EditRenderer.renderCheckbox(toggle);

            createElement(
                'span',
                {
                    className: EditGlobals.classNames.toggleSlider,
                    onclick: options.callback
                },
                {},
                toggle
            );
        }

        return toggle;
    }

    public static renderText(
        parentElement: HTMLDOMElement,
        text: string,
        callback?: Function
    ): HTMLDOMElement|undefined {
        let textElem;

        if (parentElement) {
            textElem = createElement(
                'div', {
                    className: EditGlobals.classNames.labelText,
                    textContent: text,
                    onclick: callback
                }, {},
                parentElement
            );
        }

        return textElem;
    }

    public static renderIcon(
        parentElement: HTMLDOMElement,
        icon: string,
        callback?: Function
    ): HTMLDOMElement|undefined {
        let iconElem;

        if (parentElement) {
            iconElem = createElement(
                'div', {
                    onclick: callback
                }, {},
                parentElement
            );

            (iconElem.style as any)['background-image'] = 'url(' + icon + ')';
        }

        return iconElem;
    }

    public static renderInput(
        parentElement: HTMLDOMElement,
        options: FormField
    ): HTMLDOMElement|undefined {
        let input: HTMLDOMElement|undefined;

        if (parentElement) {
            if (options.title) {
                EditRenderer.renderText(
                    parentElement,
                    options.title
                );
            }

            input = createElement(
                'input', {
                    type: 'text',
                    onclick: options.callback,
                    id: options.id || '',
                    name: options.name || '',
                    value: (
                        options.value && options.value.replace(/\"/g, '') ||
                        ''
                    )
                }, {

                },
                parentElement
            );
        }

        return input;
    }

    public static renderTextarea(
        parentElement: HTMLDOMElement,
        options: FormField
    ): HTMLDOMElement|undefined {
        let textarea;

        if (parentElement) {

            if (options.title) {
                EditRenderer.renderText(
                    parentElement,
                    options.title
                );
            }

            textarea = createElement(
                'textarea', {
                    id: options.id,
                    name: options.name,
                    value: options.value || ''
                }, {

                },
                parentElement
            );
        }

        return textarea;
    }

    public static renderCheckbox(
        parentElement: HTMLDOMElement
    ): HTMLDOMElement|undefined {
        let input;

        if (parentElement) {
            input = createElement(
                'input', {
                    type: 'checkbox'
                }, {

                },
                parentElement
            );
        }

        return input;
    }

    public static renderButton(
        parentElement: HTMLDOMElement,
        options: ButtonOptions
    ): HTMLDOMElement|undefined {
        let button;

        if (parentElement) {
            button = createElement(
                'button', {
                    className: (
                        EditGlobals.classNames.button + ' ' +
                        (options.className || '')
                    ),
                    onclick: options.callback,
                    textContent: options.value
                }, options.style || {},
                parentElement
            );

            if (options.icon) {
                (button.style as any)['background-image'] =
                    'url(' + options.icon + ')';
            }
        }

        return button;
    }
}

namespace EditRenderer {}

export interface ButtonOptions {
    callback?: Function;
    value?: string;
    className?: string;
    icon?: string;
    isDisabled?: boolean;
    style?: CSSObject;
}

export interface FormField {
    id: string;
    name: string;
    callback?: Function;
    title?: string;
    value?: string;
}

export default EditRenderer;
