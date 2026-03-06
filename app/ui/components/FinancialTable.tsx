type FinancialTableRow = {
  label: string;
  value: string;
  isBold?: boolean;
};

type FinancialTableProps = {
  rows: FinancialTableRow[];
};

const FinancialTable: React.FC<FinancialTableProps> = ({ rows }) => {
  return (
    <table>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx}>
            <td
              className={`${idx === 0 ? "border-t" : ""} text-right w-1/2 p-2 border-b ${row.isBold ? "font-bold" : ""}`}
            >
              {row.label}
            </td>
            <td
              className={`${idx === 0 ? "border-t" : ""} text-left w-1/2 p-2 border-b ${row.isBold ? "font-bold" : ""}`}
            >
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FinancialTable;
