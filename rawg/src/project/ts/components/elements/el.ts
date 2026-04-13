type TagToElement = {
  input: HTMLInputElement;
  button: HTMLButtonElement;
  div: HTMLDivElement;
  form: HTMLFormElement;
  span: HTMLSpanElement;
  hr: HTMLHRElement;
  h3: HTMLHeadingElement;
  h1: HTMLHeadingElement;
  h4: HTMLHeadingElement;
  img: HTMLImageElement;
  br: HTMLBRElement;
  label: HTMLLabelElement;
  select: HTMLSelectElement;
  option: HTMLOptionElement;
  body: HTMLBodyElement;
  i: HTMLElement;
  ul: HTMLUListElement;
  li: HTMLLIElement;
  dt: HTMLElement;
  dd: HTMLElement;
  dl: HTMLDListElement;
};

export function el<K extends keyof TagToElement>(
  tagName: K,
  attributes: Record<string, any> = {},
  children: (Node | string)[] = [],
): TagToElement[K] {
  const element = document.createElement(tagName) as TagToElement[K];
  Object.assign(element, attributes);
  if (event) Object.assign(element, event);

  children.forEach((child) => {
    element.append(child);
  });
  return element;
}
