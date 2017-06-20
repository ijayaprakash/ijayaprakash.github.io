---
layout: post
title: Svg Animations
date: 2017-06-20 
tags: blog    
---



### Using SVg To animate Objects 

<!DOCTYPE html>
<html>
<body>
<p>

<strong><sup><h1></h1>Using svg to animate Objects  
</sup></strong>

</p>

<input type="button" value="Click to re animate" onClick="window.location.reload()">

<svg align="right" width="300" height="400"> 

<g id="R1" transform="translate(250 250)"> 
  <circle cx="50" cy="50" r="50" stroke="black" stroke-width="4" fill="blue"">
  <animateTransform attributeName="transform" type="rotate" dur="7s" from="0" to="360" repeatCount="indefinite" />
  <animate attributeName="cx" dur="8s" values="-20; 220; -20" repeatCount="indefinite" />
  <animate attributeName="cy" dur="3s" values="10; 60; 10" repeatCount="indefinite" />
  <animate id="R1" attributeName="fill" from="red" to="blue" dur="8s" fill="Freeze" />
  <animate id="R1" attributeName="fill" from="green" to="purple" dur="3s" fill="freeze" />
  </circle>
</g>

<use xlink:href="#R1" transform="rotate(72 390 150)" />
<use xlink:href="#R1" transform="rotate(144 390 150)" />
<use xlink:href="#R1" transform="rotate(216 390 150)" />
<use xlink:href="#R1" transform="rotate(288 390 150)" />
</svg> 

</body>

</html>


