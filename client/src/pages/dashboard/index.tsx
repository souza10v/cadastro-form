import { useState } from "react";







export const Dashboard = () =>{
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (selectedItems.includes(value)) {
        setSelectedItems(selectedItems.filter((item) => item !== value));
      } else {
        setSelectedItems([...selectedItems, value]);
      }
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log('Selected safety equipment:', selectedItems);
    };
  
    const safetyEquipmentList: string[] = [
      "Blusão de raspa",
      "Cinto de segurança paraquedista",
      "Máscara descartável",
      "Vestimento NOMEX",
      "Bota de PVC",
      "Luva de couro",
      "Máscara semifacial",
      "Botina de segurança",
      "Luva de PVC",
      "Óculos de proteção",
      "Capacete com jugular",
      "Luva de vaqueta",
      "Perneira de raspa / sintética",
      "Protetor auditivo",
    ];
  
    return (
      <div>
        <h2>Safety Equipment Checklist</h2>
        <form onSubmit={handleSubmit}>
          <ul>
            {safetyEquipmentList.map((item) => (
              <li key={item}>
                <input
                  type="checkbox"
                  name="safety_equipment"
                  value={item}
                  checked={selectedItems.includes(item)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={item}>{item}</label>
              </li>
            ))}
          </ul>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
}
