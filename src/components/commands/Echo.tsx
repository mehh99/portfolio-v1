import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Echo: React.FC = () => { //Mendefinisikan komponen fungsional Echo.
  const { arg } = useContext(termContext); //Mengambil nilai arg dari konteks termContext. arg diharapkan merupakan array yang berisi argumen yang diberikan pengguna saat memanggil perintah echo.

  let outputStr = _.join(arg, " "); //Menggunakan _.join dari lodash untuk menggabungkan elemen-elemen di dalam array arg menjadi satu string, dengan spasi sebagai pemisah.
  outputStr = _.trim(outputStr, "'"); // Menggunakan _.trim untuk menghapus karakter tertentu (single quote, double quote, dan backtick) dari awal dan akhir string yang dihasilkan. Ini berguna untuk menghilangkan tanda kutip yang tidak perlu jika pengguna menambahkan karakter tersebut saat memanggil perintah
  outputStr = _.trim(outputStr, '"'); // remove trailing double quotes ""
  outputStr = _.trim(outputStr, "`"); // remove trailing backtick ``

  return <Wrapper>{outputStr}</Wrapper>; //Mengembalikan elemen JSX yang berisi string yang telah dibersihkan dan digabungkan, dibungkus dalam komponen Wrapper.
};

export default Echo;
