<?php
/*
* The "Jeffrey Way Special":  Die and Dump (shouldn't it be the other way around?)
*/

function dd($value) {
  echo "<pre>";
  echo var_dump($value);
  echo "</pre>";
  die();
}
