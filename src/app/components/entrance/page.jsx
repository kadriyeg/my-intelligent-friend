import React from 'react';
import './style.css';


const EntranceComp = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className="row">
                    <h1 className='title-black'>Akıllı Özetleme</h1>
                    <h1 className='title-orange'> Eğlenceli Öğrenme</h1>
                    </div>
                    <div className="row">
                    <p className='text'>Zeki Yol Arkadaşım size uzun ders notlarınızı özetleyip video içeriğine dönüştürerek daha interaktif
                        ve multimedya destekli bir ders içeriğine dönüştürür.</p>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='teacherimg'>
                        <img src='assets/teacher.png' alt='Image' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EntranceComp;
