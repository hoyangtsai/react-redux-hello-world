import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Hello from './Hello';
import Change from './Change';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    //actions和text这两个props在第5步中会解释
    const { actions, text} = this.props;
    return (
      <div>
        <Hello actions={actions} text={text}/>
        <Change actions={actions}/>
      </div>
    );
  }
}


//action
//我们这里并没有使用const来声明常量，实际生产中不推荐像下面这样做
function changeText(){
  return {
    type:'CHANGE_TEXT'
  }
}

function buttonClick(){
  return {
    type:'BUTTON_CLICK'
  }
}

//mapStateToProps的作用是声明，当state树变化的时候，哪些属性是我们关心的？
//由于我们这个应用太小，只有一个属性，所以只有text这个字段。
function mapStateToProps(state) {
  return { text: state.text }
}

//mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch){
  return{
    actions : bindActionCreators({changeText:changeText,buttonClick:buttonClick},dispatch)
  }
}

//这里实际上给了App两个props：text和actions，即第4步中的那段注释
App = connect(mapStateToProps,mapDispatchToProps)(App)


export default App;