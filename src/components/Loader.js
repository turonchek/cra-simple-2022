import React,{Component} from "react";
import BallBeat from 'react-fullpage-custom-loader'

export function Loader(){
    return(
        <BallBeat 
            color="black"
            loaderSize="small"
            wrapperBackgroundColor="none" />
    )
}