const React = {//用一个对象字面量创建命名空间
  createElement
};
function createElement (tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children
  }
}

const ReactDOM = {//命名空间中可提供方法
  render: (vnode, container) => {
    return render(vnode, container);
  }
};

function render(vnode, container) {
  console.log(vnode);
  if(typeof vnode ==='string') {
    const textNode = document.createTextNode(vnode);//将文本内容变成文本结点
    return container.appendChild(textNode);
  }
  if(vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      if(key === 'className') key = 'class';
      dom.setAttribute(key, vnode.attrs[key]);
    })
  }
  const dom = document.createElement(vnode.tag);
  vnode.children.forEach(child => render(child, dom));
  return container.appendChild(dom)
}

const element = (
  <div>
    hello<span>world</span>
  </div>
);
// console.log(element)

ReactDOM.render(
  <h1>Hello, World!</h1>, document.getElementById('root')
)