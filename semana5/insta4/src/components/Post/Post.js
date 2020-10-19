import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

import {IconeSemContador} from '../IconeSemContador/IconeSemContador'

import iconeMarcacaoPreto from '../../img/bookmark-black.svg'
import iconeMarcacaoBranco from '../../img/bookmark_border-black.svg'
import iconeCompartilhar from '../../img/share-black.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhando: false
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    })
    if (!this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }
  
  onClickMarcado = () => {
    this.setState({
      marcado: !this.state.marcado
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoCompartilhar = (event) => {
    this.setState({
      compartilhando: false,
    })
    console.log("Post compartilhado no " + event.target.id + " com a mensagem: " + this.state.comentarioDoCompartilhar)
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
  
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida
    let iconeMarcado

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.marcado) {
      iconeMarcado = iconeMarcacaoPreto
    } else {
      iconeMarcado = iconeMarcacaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar aoCompartilhar={this.aoCompartilhar}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeSemContador
          icone={iconeMarcado}
          onClickIcone={this.onClickMarcado}
        />

        <IconeSemContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post