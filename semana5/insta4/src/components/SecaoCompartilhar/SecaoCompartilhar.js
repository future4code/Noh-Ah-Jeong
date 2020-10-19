import React, {Component} from 'react'
import './SecaoCompartilhar.css'

export class SecaoCompartilhar extends Component {
	state = {
        comentarioDoCompartilhar: ''
	}

	onChangeComentario = (event) => {
        this.setState({comentarioDoCompartilhar: event.target.value})
    }

	render() {
		return <div className={'bookmark-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentarioDoCompartilhar}
				onChange={this.onChangeComentario}
			/>
            <button id={'Instagram'} onClick={this.props.aoCompartilhar}>Instagram</button>
            <button id={'Facebook'} onClick={this.props.aoCompartilhar}>Facebook</button>
			<button id={'Twitter'} onClick={this.props.aoCompartilhar}>Twitter</button>
		</div>
		
	}
}
