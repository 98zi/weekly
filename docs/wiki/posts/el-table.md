# el-table

---

element-ui el-table 分页功能.

```html
<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="age" label="Age"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalItems">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      totalItems: 0
    };
  },
  mounted() {
    // 初始化加载数据
    this.loadData();
  },
  methods: {
    loadData() {
      // 模拟异步请求数据
      setTimeout(() => {
        // 假设从后端获取到的数据是一个包含所有数据的数组
        const allData = [
          { name: 'John', age: 25 },
          { name: 'Jane', age: 30 },
          { name: 'Bob', age: 35 },
          // ...
        ];
        
        // 根据当前页码和每页显示的数量进行数据切片
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        this.tableData = allData.slice(startIndex, endIndex);
        
        // 更新总数据量
        this.totalItems = allData.length;
      }, 500);
    },
    handleSizeChange(newSize) {
      this.pageSize = newSize;
      this.loadData();
    },
    handleCurrentChange(newPage) {
      this.currentPage = newPage;
      this.loadData();
    }
  }
};
</script>
```