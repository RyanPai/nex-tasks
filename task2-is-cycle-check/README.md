
## 解題流程

### 1. 建立對應表（mapping）

用 A 當 key，B 當 value：

```
A[i] → B[i]
```

例如：

```
A = [1, 3, 2, 4] and B = [4, 1, 3, 2] 

1 → 4
4 → 2
2 → 3
3 → 1
```

同時檢查：

* 如果 A 出現重複點 → 直接 return false

---

### 2. 設定起始點

```
start = A[0]
current = start
```

---

### 3. 建立可走訪點集合

```
points = 所有 A 的點
```

代表還沒走過的點。

---

### 4. 開始走訪

只要 `current` 還在 `points` 裡：

1. 從 `points` 移除 current（表示已走過）
2. 找下一點：

```
current = mapping.get(current)
```

3. 如果找不到（是 undefined）：

```
return false
```

---

### 5. 結束條件

走完後必須同時成立：

```
points.size === 0   （全部點都走過）
current === start   （最後回到起點）
```

兩者都成立才回傳：

```
true
```

否則：

```
false
```

---
