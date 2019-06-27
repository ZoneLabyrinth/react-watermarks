import React from 'react'
import './watermarks.css'
import { PropTypes } from 'prop-types';


export default class WaterMarks extends React.Component {


    static propTypes = {
        padding: PropTypes.number,
        text: PropTypes.string,
        rotate: PropTypes.number
    }

    static defaultProps = {
        text: '信息技术部',
        rotate: -30,
    }

    state = {
        num : 2
    }

    waterMarks = React.createRef();

    componentDidMount(){
        setTimeout(() => {
            this.getStyle()
        }, 0);
    }

    getStyle(){
        let waterEl = this.waterMarks.current;
        if(!waterEl.parentNode) return

        let containerHeight = waterEl.parentElement.clientHeight;
        let containerWidth = waterEl.parentNode.clientWidth;

        this.waterMarks.current.style.width=`${containerWidth}px`
        this.waterMarks.current.style.height=`${containerHeight}px`
        
        let childHeight = waterEl.children[0].clientHeight;
        let childWidth = waterEl.children[0].clientWidth;

        let horiNum = containerWidth/childWidth;


        let verNum = (containerHeight - 20)/childHeight;

        let num = Math.floor(horiNum)  * Math.floor(verNum > 1 ? verNum : 1.1);
        
        this.setState({
            num: num ? num : 2
        })
    }

    render(){
        const { padding,text,rotate } = this.props;

        var list = ()=>{
            var res = [];
            for(var i = 0; i < this.state.num; i++) {
                res.push(
                    <div className="water--mark__text" key={i} style={{padding: `${padding}px`}}>
                        <p style={{transform:`rotate(${rotate}deg)`}}>
                            {text}
                        </p>
                    </div>
                    )
              }
              return res
        }
        
        return (
            <div className="water--mark" ref={this.waterMarks}>
                  {list()}  
            </div>
        )
    }



}