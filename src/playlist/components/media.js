import React,{Component} from 'react';
import './media.css';
export default class Media extends Component {
    render() {

     
        return (
            <div className="Media">
                <div className="Media-cover">
                    <img
                    className="Media-image"
                        src=""
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">¿porque aprender react js?</h3>
                    <p className="Media-author">Author Julian</p>
                </div>
            </div>
        )
    }
}
