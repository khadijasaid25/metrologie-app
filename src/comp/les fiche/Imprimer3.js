import React,{useRef} from 'react';
import {useReactToPrint} from 'react-to-print';
import Sidebarfiche1 from "../fiches/Sidebarfiche1";
function Imprimer3(){
    const componentRef = useRef();
    const handelPrint = useReactToPrint({
content:() => componentRef.current,
documentTitle:'emp-data',
onAfterPrint:()=> alert('print success')
    });
    return(
        <div className='p3'>
        <Sidebarfiche1/>
        <div className='nompage'>
<p>Imprimer:</p>
</div>
          <div className='imprimer3'>
         <div className='print2'ref={componentRef }  >
         <p>fiche</p>
         <button  className="printbnt3" onClick={handelPrint}>print</button>
        </div>
        </div>
        </div>
    )
}
export default Imprimer3;