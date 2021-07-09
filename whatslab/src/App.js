import React from 'react';
import styled from 'styled-components';

const TelaMensagens = styled.div`
 border: 2px solid #B4F8C8;
 height: 100vh;
 box-sizing: border-box;
 width: 700px;
 margin: auto;
 display: flex;
 flex-direction: column;
`
const EnviarMensagens = styled.div`
 flex-grow: 1;
 padding: 5px;
 display: flex;
 flex-direction: column-reverse;
 background-color: #FBE7C6;
`

const InputsContainer = styled.div`
 display:flex;
`

const NameInput = styled.input`
 width: 100px;
`

const MessageInput = styled.input`
 flex-grow:1;
`

class App extends React.Component {
  state = {
    messages: [],
    userValue: '',
    messageValue: ''
  }

  onChangeUserValue = (event) => {
    this.setState({userValue: event.target.value})

  }

  onChangeMessageValue = (event) => {
    this.setState({messageValue: event.target.value})
  }

  sendMessage = () => {
    const newMessage = {
      user: this.state.userValue,
      text: this.state.messageValue,
    }

    const newMessagesArray = [newMessage, ...this.state.messages]

    this.setState({messages: newMessagesArray, messageValue: ''})
  }

  render() {
     return (
       <TelaMensagens>
         <EnviarMensagens>
           {this.state.messages.map((message, index) => {
             return <p key={index}>
             <strong>{message.user}</strong>: {message.text}     
            </p>
          })}

         </EnviarMensagens>

         <InputsContainer>
          <NameInput onChange={this.onChangeUserValue} value={this.state.userValue} placeholder={'Usuário'}/>
          
          <MessageInput onChange={this.onChangeMessageValue} value={this.state.messageValue} placeholder={'Mensagem'}/>
          
          <button onClick={this.sendMessage}>Enviar</button>

         </InputsContainer>
       </TelaMensagens>
     );
    }
  }

export default App;