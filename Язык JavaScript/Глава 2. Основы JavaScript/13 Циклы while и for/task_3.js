
for (let i = 0; i < 5; i++) alert( i );
//      i < 5     alert       i++
//      0           0          1
//      1           1          2
//      2           2          3
//      3           3          4
//      4           4          5
//      5 (конец)




for (let i = 0; i < 5; ++i) alert( i );
//      i < 5     alert       ++i
//      0           0          1
//      1           1          2
//      2           2          3
//      3           3          4
//      4           4          5
//      5 (конец)


// Постфиксность/префиксность инкремента ни на что не влиет, т.к. значения выражения с инкрементом ("++i" / "i++") нигде не используется.