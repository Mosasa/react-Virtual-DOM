1. 虚拟DOM(Virtual DOM)
mvvm封装了dom层，为什么封装？：dom太消耗内存(性能问题)
所以：vnode + diff 算法来解决

jsx语法  用js对象描述html结构
jsx 背后隐含着VNode的真相
React.createElement(
  标签(h1) 第一个参数， ele = document.createElement()
  atttributes 第二个参数  ele.setAttribute(key, val),
  children 第三个参数  
            文本结点 textnode
            node(有子结点)  用递归
  
)
vue、react在mvvm框架的基础上在内存中保存着一个json object(一个与页面上对应(映射)的虚拟DOM)
虚拟DOM  (调用createElement方法)->  真实DOM
虚拟DOM代表真实DOM在内存中出现
<h1 className="title">标题 <span>副标题</span> </h1>
虚拟DOM语法：
vNode = {
  tag: "h1",
  atts: {
    className: "title
  },
  children: [
    '标题'
    递归 VNode...(利用递归实现DOM树的嵌套)
  ]
}

babel index.js -o b.js  将index文件进行编译到新生成的b文件中