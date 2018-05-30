import Mock from 'mockjs'
import data from '../data.json'

Mock.mock('/good/seller',{/*mock方法的使用  mock(url,template) 即路径和数据模板*/
	code:0,
	codeMsg:'成功',
	data:data.seller/*因为上边已经有data.json所以直接用data表示，seller是数据中对应字段*/
})
Mock.mock('/good/goods',{
	code:0,
	codeMsg:'成功',
	data:data.goods
})
Mock.mock('/good/ratings',{
	code:0,
	codeMsg:'成功',
	data:data.ratings
})