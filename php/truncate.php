<?php

/*
Truncates a string to a given character length, 
avoiding word breaks, and appends an ellipsis.
*/

function truncate($string, $length=25, $append="&hellip;") {
  $string = trim($string);

  if (strlen($string) > $length) {
    $string = wordwrap($string, $length);
    $string = explode("\n", $string, 2);
    $string = $string[0] . $append;
  }

  return $string;
}