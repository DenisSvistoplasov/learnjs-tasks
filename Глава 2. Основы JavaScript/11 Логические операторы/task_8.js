if (-1 || 0) alert('first');
// Выполнится. 
// (-1 || 0) -> (true || ...) -> (-1) -> (true)


if (-1 && 0) alert('second');
// Не выполнится
// (-1 && 0) -> (true && false) -> (0) -> (false)


if (null || -1 && 1) alert('third');
// Выполнится
// (null || -1 && 1) -> (null || (true && true)) -> (null || 1) -> (false || true) -> (1) -> (true)