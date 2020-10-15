import React, {Component} from 'react'
import './SecaoCompartilhar.css'

export class SecaoCompartilhar extends Component {
	state = {
		inputDeComentario: ''
	}

	onChangeComentario = (event) => {
		this.setState({inputDeComentario: event.target.value})
	}

	render() {
		return <div className={'bookmark-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.inputDeComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
		
	}
}
