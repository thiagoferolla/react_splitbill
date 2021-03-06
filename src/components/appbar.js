import React, { Component } from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import Snackbar from 'material-ui/Snackbar';


export default class AppBar extends Component {
    constructor(props){
        super(props)
        this.next = this.next.bind(this)
        this.back = this.back.bind(this)
        this.state = {open:false}
    }

    button = ()=>{
        if (this.props.page === 2){
            return <ToolbarGroup onClick={this.next}>Fechar Conta<ArrowForward/></ToolbarGroup>
        }
        return <ToolbarGroup onClick={this.next}>Próximo<ArrowForward/></ToolbarGroup>
    }

    render(){

        return (
            <div className='toolbar'>
                <Toolbar style={{backgroundColor:'rgba(249,168,37,1)'}}>    
                    <ToolbarGroup onClick={this.back}><ArrowBack/>Voltar</ToolbarGroup>
                    {this.button()}
                </Toolbar>
                <Snackbar style={{backgroundColor:'#d50000'}} open={this.state.open} message={'Nenhum cliente cadastrado'} 
                    autoHideDuration={4000}
                    onRequestClose={()=>this.setState({open:false})}
                />
            </div>
        )
    }

    next(){
        const url = this.props.page+1
        return (window.location = url)
    }

    back(){
        if (this.props.page===0){
            return window.location = '../'
        }
    
        const url = this.props.page-1
        return (window.location=url)
    }



} 
