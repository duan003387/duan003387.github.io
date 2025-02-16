class TableManager {
    constructor() {
        this.tables = {
            table1: null,
            table2: null
        };
        this.initializeHandlers();
    }
    updateTableControls(tableId) {
        const table = this.tables[tableId];
        if (!table) return;

        const headers = table.getData()[0];
        const mergeSelect = document.getElementById(`${tableId}MergeCol`);
        const sumSelect = document.getElementById(`${tableId}SumCol`);

        // 清空现有选项
        mergeSelect.innerHTML = '<option value="">选择合并列</option>';
        sumSelect.innerHTML = '<option value="">选择求和列</option>';

        // 添加表头选项
        headers.forEach((header, index) => {
            if (header) {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = header;
                mergeSelect.appendChild(option.cloneNode(true));
                sumSelect.appendChild(option.cloneNode(true));
            }
        });
    }

    mergeAndSum(tableId) {
        const table = this.tables[tableId];
        if (!table) return;

        const mergeColIndex = parseInt(document.getElementById(`${tableId}MergeCol`).value);
        const sumColIndex = parseInt(document.getElementById(`${tableId}SumCol`).value);

        if (isNaN(mergeColIndex) || isNaN(sumColIndex)) {
            alert('请选择要合并和求和的列');
            return;
        }

        const data = table.getData();
        const headers = data[0];
        const mergedData = new Map();

        // 从第二行开始处理数据（跳过表头），只处理合并列有值的数据
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            const mergeKey = row[mergeColIndex];

            // 只处理合并列有值的数据
            if (mergeKey) {
                const sumValue = parseFloat(row[sumColIndex]) || 0;

                if (mergedData.has(mergeKey)) {
                    mergedData.get(mergeKey).sum += sumValue;
                } else {
                    mergedData.set(mergeKey, {
                        row: row,
                        sum: sumValue
                    });
                }
            }
        }

        // 构建新数据
        const newData = [headers];
        let totalSum = 0;

        mergedData.forEach((value, key) => {
            const newRow = [...value.row];
            newRow[sumColIndex] = value.sum;
            totalSum += value.sum;
            newData.push(newRow);
        });

        // 显示结果
        const resultElement = document.getElementById(`${tableId}SumResult`);
        resultElement.textContent = `总和: ${totalSum.toFixed(2)}`;

        // 更新表格
        this.initializeTable(newData, tableId);

        this[`totalSum${tableId}`] = totalSum;
    }

    totalSumtable1 = 0;
    totalSumtable2 = 0;


    initializeHandlers() {
        // 文件导入处理
        document.getElementById('fileInput1').addEventListener('change', (e) => this.handleFileImport(e, 'table1'));
        document.getElementById('fileInput2').addEventListener('change', (e) => this.handleFileImport(e, 'table2'));

        // 合并求和按钮处理
        document.getElementById('mergeTable1Btn').addEventListener('click', () => this.mergeAndSum('table1'));
        document.getElementById('mergeTable2Btn').addEventListener('click', () => this.mergeAndSum('table2'));

        document.getElementById('exportBtn').addEventListener('click', () => this.exportMergedData());
    }

    handleFileImport(e, tableId) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            this.initializeTable(jsonData, tableId);
            this.updateTableControls(tableId);
        };

        reader.readAsArrayBuffer(file);
    }

    initializeTable(data, tableId) {
        const container = document.getElementById(`${tableId}Container`);

        if (this.tables[tableId]) {
            this.tables[tableId].destroy();
        }

        this.tables[tableId] = new Handsontable(container, {
            data: data,
            rowHeaders: true,
            colHeaders: true,
            filters: true,
            dropdownMenu: true,
            contextMenu: true,
            multiColumnSorting: true,
            licenseKey: 'non-commercial-and-evaluation'
        });
    }

    exportToExcel() {
        const wb = XLSX.utils.book_new();

        // 导出表格1
        if (this.tables.table1) {
            const ws1 = XLSX.utils.aoa_to_sheet(this.tables.table1.getData());
            XLSX.utils.book_append_sheet(wb, ws1, 'Table1');
        }

        // 导出表格2
        if (this.tables.table2) {
            const ws2 = XLSX.utils.aoa_to_sheet(this.tables.table2.getData());
            XLSX.utils.book_append_sheet(wb, ws2, 'Table2');
        }

        XLSX.writeFile(wb, 'exported_tables.xlsx');
    }

    updateStyle(type, value) {
        Object.values(this.tables).forEach(table => {
            if (!table) return;

            const container = table.rootElement;
            switch (type) {
                case 'header':
                    container.querySelector('.ht_clone_top').style.backgroundColor = value;
                    break;
                case 'cell':
                    container.querySelector('.ht_master table').style.backgroundColor = value;
                    break;
                case 'fontSize':
                    container.style.fontSize = `${value}px`;
                    break;
            }
        });
    }

    mergeData() {
        const table = this.tables.table2;
        if (!table) return;

        const mergeColIndex = parseInt(document.getElementById('headerSelect').value);
        const sumColIndex = parseInt(document.getElementById('sumSelect').value);

        if (isNaN(mergeColIndex) || isNaN(sumColIndex)) {
            alert('请选择要合并和求和的列');
            return;
        }

        const data = table.getData();
        const headers = data[0];
        const mergedData = new Map();

        // 从第二行开始处理数据（跳过表头）
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            const mergeKey = row[mergeColIndex];
            const sumValue = parseFloat(row[sumColIndex]) || 0;

            if (mergedData.has(mergeKey)) {
                // 累加值
                mergedData.get(mergeKey).sum += sumValue;
            } else {
                // 新建记录
                mergedData.set(mergeKey, {
                    row: row,
                    sum: sumValue
                });
            }
        }

        // 构建新的数据数组
        const newData = [headers];
        mergedData.forEach((value, key) => {
            const newRow = [...value.row];
            newRow[sumColIndex] = value.sum;
            newData.push(newRow);
        });

        // 更新表格数据
        this.initializeTable(newData, 'table2');
    }

    mergeOrders(tableId) {
        const table = this.tables[tableId];
        if (!table) return;

        const data = table.getData();
        const headers = data[0];

        // 找到订单号和金额列的索引
        const orderColIndex = headers.findIndex(h =>
            h && h.includes('Order') || h.includes('订单'));
        const amountColIndex = headers.findIndex(h =>
            h && h.includes('Total Settlement') || h.includes('总结算金额'));

        if (orderColIndex === -1 || amountColIndex === -1) {
            alert('未找到订单号或金额列');
            return;
        }

        // 创建合并后的数据映射
        const mergedData = new Map();

        // 跳过表头，处理数据行
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            const orderId = row[orderColIndex];
            const amount = parseFloat(row[amountColIndex]) || 0;

            if (mergedData.has(orderId)) {
                // 累加金额
                mergedData.get(orderId).amount += amount;
            } else {
                // 新建记录
                mergedData.set(orderId, {
                    row: row,
                    amount: amount
                });
            }
        }

        // 构建新的数据数组
        const newData = [headers];
        mergedData.forEach((value, orderId) => {
            const newRow = [...value.row];
            newRow[amountColIndex] = value.amount;
            newData.push(newRow);
        });

        // 更新表格数据
        this.initializeTable(newData, tableId);
    }


    exportMergedData() {
        const table1 = this.tables.table1;
        const table2 = this.tables.table2;

        if (!table1 || !table2) {
            alert('请先导入两个表格');
            return;
        }

        const table1Data = table1.getData();
        const table2Data = table2.getData();

        // 获取选中的列索引
        const table1SumColIndex = parseInt(document.getElementById('table1SumCol').value);
        const table2SumColIndex = parseInt(document.getElementById('table2SumCol').value);

        const table1MergeColIndex = parseInt(document.getElementById('table1MergeCol').value);
        const table2MergeColIndex = parseInt(document.getElementById('table2MergeCol').value);

        if (isNaN(table1SumColIndex) || isNaN(table2SumColIndex)) {
            alert('请先选择要求和的列');
            return;
        }

        // 找到订单号列
        const orderColIndex = table1MergeColIndex;

        // 创建订单号映射
        const orderMap = new Map();
        for (let i = 1; i < table1Data.length; i++) {
            const row = table1Data[i];
            orderMap.set(row[orderColIndex], {
                value1: parseFloat(row[table1SumColIndex]) || 0
            });
        }

        // 合并第二个表格数据
        for (let i = 1; i < table2Data.length; i++) {
            const row = table2Data[i];
            const orderId = row[table2MergeColIndex];
            if (orderMap.has(orderId)) {
                console.log(row, row[table2SumColIndex]);
                orderMap.get(orderId).value2 = parseFloat(row[table2SumColIndex]) || 0;
            }
        }

        // 创建新的合并数据
        const mergedData = [
            ['订单号', '拍单金额', '结算金额', '利润']
        ];

        let totalSum = 0;
        let totalValue1 = 0;
        let totalValue2 = 0;

        orderMap.forEach((values, orderId) => {
            const value1 = values.value1 || 0;
            const value2 = values.value2 || 0;
            const profit = value2 - value1;

            mergedData.push([
                orderId,
                value1,
                value2,
                profit
            ]);

            totalValue1 += value1;
            totalValue2 += value2;
            totalSum += profit;
        });

        // 添加总计行
        mergedData.push([
            '总计',
            this.totalSumtable1,
            this.totalSumtable2,
            this.totalSumtable2 - this.totalSumtable1
        ]);

        // 创建并导出Excel
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(mergedData);
        XLSX.utils.book_append_sheet(wb, ws, '利润');
        XLSX.writeFile(wb, '利润表.xlsx');
    }
}

// 初始化
const tableManager = new TableManager();