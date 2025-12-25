<?php
$a = 5;
$b = 10;
$x = 20;
$y = 20;
$aa = true;
$bb = false;
$suka = true;

$jawaban = $suka ? "iya" : "tidak";
// if($suka) {
//     $jawaban = "iya"
// } else {
//      $jawaban = "tidak";
// }
echo "apakah kamu suka pemrograman? " . $jawaban . "\n";

$w = ($x == $y); // sama dengan
echo " $x == $y: $w\n";
$z = ($x === $y); //identik
echo "$x === $y: $z\n";

$c = $a < $b; // Kurang dari
echo "$a < $b : $c\n";
$d = $a > $b; // lebih dari
echo "$a > $b: $d\n";
$e = $a <= $b; // kurang dari atau sama dengan
echo "$a <= $b: $e\n";
$f = $a >= $b; // lebih dari atau sama dengan
echo "$a >= $b: $f\n";
$g = $a == $b; // sama dengan
echo "$a == $b: $g\n";
$h = $a != $b; // tidak sama dengan
echo "$a != $b $h\n";

$i = $aa && $bb; //and
echo "aa and bb: " . ($i ? 'true' : 'false') . "\n";
$j = $aa || $bb; //or
echo "aa or bb: " . ($j ? 'true' : 'false') . "\n";
$k =  ! $aa; // not
echo "not aa: " . ($k ? 'true' : 'false') . "\n";

?>