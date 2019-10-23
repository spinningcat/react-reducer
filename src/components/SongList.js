import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSongs } from '../action'

class SongList extends Component{
    renderList (){
       
       
       return this.props.songs.map((song) =>{
            return (
                <div className = "item" key={song.title}>

                    <div className="right">
                        <button onClick = {() => this.props.selectSongs(song) } >Select</button>
                    </div>
                    <div className="content">
                        <p>{song.title}</p>

                   </div>
                </div>
            )
        });
    }
    render(){
         
        return <div>{ this.renderList() }</div>
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        songs : state.song
        
    };
}
export default connect(mapStateToProps, { selectSongs })(SongList)