import React, {Component} from 'react';
import styles from './MyNewComponent.module.css';
// const btnStyle = {
//     padding: '12px 15px',
//     fontFamily: 'Arial, sans-serif',
//     fontWeight: 'bold',
//     background: 'linear-gradient(30deg, aquamarine, lime)', 
//     color: '#fff',
//     border: '1px solid',
//     borderRadius: '50%'
// };
    
const MyNewComponent = (props) => {
    return(
        <div>
            { props.children }
            <h1 style={styles.btn}>
                { props.header }
            </h1>
        </div>
    );
}
    
export default MyNewComponent;

