import {useState,useEffect,useRef} from 'react';



export const useFetch = (url) => {

    const isMounted = useRef(true);
	
  
   const [state,setState] = useState ({  data: null , loading:true, error:null });

    
    useEffect (() =>{                      // mantiene la referecia al mismo componente 

            return () =>{                        
                isMounted.current = false;
            }

    },[])




    useEffect( ()=> {

       
    fetch (url) 
    .then(resp => resp.json())
    .then(data =>{
                                          // hace el llamdo para que vuelva apaecer.
        if (isMounted.current) {
                
                    setState ({
                      loading: false,
                      error:null,
                      data
                   });

            }
                 
           
    });

    .cath (( ) =>{

        setState({

              data:null;
              loading:false,
              error:'No se pudo cargar la info'

        })

    })


    },[url]);

return state;

	}