import React from 'react';
import './App.scss';
import marked from 'marked';

const placeholder = "#Markdown examples\n##By Paul Martin\nHere is a quick look at the basics of markdown. The page is split in to two sections...\n\n← On the left is the markdown editor, where you can see how it is written\n\n→ On the right is the markdown previewer, where you can see how it comes out\n\nHere are some cool things you can do with markdown:\n\n[This is a link to Google](www.google.com)\n\n`var thisIsSomeCode = true`\n\n```\nint thisIsACodeBlock(){\nstd::cout<<\"These can be multiline!\";\nreturn 0;\n}\n```\n\n 1. You can also write... \n 2. ...lists too! \n\n\n\n >Don't forget Blockquotes\n\nAnd memes (or any images for that matter):\n![alt text](http://www.quickmeme.com/img/44/449a52928a45a7c7a3575c966e00ee4f07e034023baa4cdb85b4f321d94e39b6.jpg \'Logo Title Text 1\')\n\n**There's loads more, so check out the link below for [bonus syntax...](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images)**";

class MarkdownPreviewer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      input: placeholder,
    }
    this.handleChange = this.handleChange.bind(this)
    this.convertText = this.convertText.bind(this)
  }
  
  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }
  
  convertText(){
  var convText = marked(this.state.input, {
      sanitize: true
    });
    return {
      __html: convText
    };
  }
  
  render(){
    
    return(
   <div className="all">
    <textarea value = {this.state.input} onChange={this.handleChange} className="editBox" id="editor" />
    <div className="previewBox" id ="preview" dangerouslySetInnerHTML = {this.convertText()}></div>
   </div>
    )
  }
}

export default MarkdownPreviewer;
