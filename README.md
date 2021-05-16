# TypeScript

[课程笔记](https://24kcs.github.io/vue3_study/)

```
npm install -g typescript
```


#### ts文件手动编译成js文件
```
tsc ./01TS.ts
```
#### ts文件自动编译成js文件
1. 生成配置文件tsconfig.json
```
tsc --init
```

2. 修改tsconfig.json配置
```
"outDir": "./js",
"strict": false,    
```

3. 启动监视任务: 
终端 -> 运行任务 -> 监视tsconfig.json
