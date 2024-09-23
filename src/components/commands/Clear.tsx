import { useContext, useEffect } from "react";
import { UsageDiv } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Clear: React.FC = () => {
  const { arg, clearHistory } = useContext(termContext);

  useEffect(() => {
    // Hanya memanggil clearHistory jika arg kosong
    if (arg.length === 0) {
      clearHistory?.();
    }
  }, [arg, clearHistory]); // Tambahkan arg dan clearHistory sebagai dependensi

  return arg.length > 0 ? <UsageDiv>Usage: clear</UsageDiv> : null; // Gunakan null alih-alih <></> untuk rendering yang lebih bersih
};

export default Clear;
