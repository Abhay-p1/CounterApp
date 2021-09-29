import React, { useState } from 'react';

const Counter = () => {

    const [curr, updateval] = useState(0);
    function showAlert(msg, classname) {
        const divele = document.createElement('div');
        divele.className = `alert ${classname}`;
        divele.appendChild(document.createTextNode(msg));
        // Get parent
        const containerpar = document.getElementById('center-div')
        const imgele = document.getElementById('imgid');
        containerpar.insertBefore(divele, imgele);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    const incval = () => {
        if (curr === 99)
            showAlert('Great Work 💯 WoW !! Keep It Up 👍 ', 'alert-success');
        updateval(curr + 1);
    }
    const decval = () => {
        if (curr > 0) {
            updateval(curr - 1);
        }
        else {
            showAlert('Sorry!! 😠 Minimum Limit Reached', 'alert-danger');
            updateval(0);
        }
    }

    return (
        <>
            <div className="main_div">
                <div id="center-div" className="center_div">
                    <h1>Counter To Count Your Steps Towards Success 😉</h1>
                    <br />
                    <img id="imgid" src="https://juicerecruitment.com/wp-content/uploads/2018/08/31235046_1612375178861667_8974658872073511788_n.jpg" />
                    <br />
                    <h1 className="extracolor"> 😄 {curr} 😢 </h1>
                    <div className="btndiv">
                        <button className="buttonadd" onClick={incval}> ➕👍</button>

                        <button className="buttondec" onClick={decval}> ➖👎</button>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Counter;