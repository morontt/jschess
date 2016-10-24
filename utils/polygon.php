<?php

// SVG symmetric polygon

$p = "20,90 20,75 30,75 33,55 25,53 10,20 31,40 31,15 43,35 50,7";

$nodes = explode(' ', $p);
$n = [];
$l = count($nodes);
for ($i = 0; $i < $l; $i++) {
    $z = $nodes[$l - 1 - $i];
    if (trim($z)) {
        $f = explode(',', $z);
        $n[] = (100 - (int)$f[0]) . ',' . $f[1];
    }
}

$p .= ' ' . implode(' ', $n);
echo $p . "\n";
