"use client";
import { useState } from "react";
export default function ReviewToggle() {
 const [wireframe,setWireframe]=useState(false);
 return <button className="review-toggle" type="button" aria-pressed={wireframe} onClick={()=>{
 const next=!wireframe;setWireframe(next);document.documentElement.classList.toggle("wireframe",next);
 }}>{wireframe?"Show website design":"Show wireframe view"}</button>;
}