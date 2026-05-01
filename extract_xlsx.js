import XLSX from 'xlsx';
import fs from 'fs';

try {
  const workbook = XLSX.readFile('d:/SubProject/hms/client/public/Treatment Item List.xlsx');
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
  // Skip the first row (headers) and extract names (deduplicated)
  const names = [...new Set(data.slice(1).flat().filter(item => typeof item === 'string' && item.trim().length > 0))];
  
  const json = JSON.stringify(names);
  fs.writeFileSync('treatments.json', json, { encoding: 'utf8' });
  console.log('Successfully wrote treatments.json (unique names, UTF-8) to ' + process.cwd());
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
