const { Grid } = require("@mui/material");
const { default: Link } = require("next/link");
import style from "../styles/index.module.css";

const MyMain = () => {
  return (
    <div>
      <Grid xs className={style.main}>
        <h3>Jawaban Untuk Soal No. 1 & 2</h3>
      </Grid>
      <Grid container className={style.answer}>
        <Grid item xs={6}>
          <h4>Apakah Kegunaan JSON pada REST API ?</h4>
          <p>
            kegunaan JSON pada REST API adalah untuk melakukan pertukaran data
            client dengan server dalam bentuk format yang dapat difahami manusia
            maupun komputer
          </p>
        </Grid>
        <Grid item xs={6}>
          <h4>Jelaskan bagaimana REST API bekerja ?</h4>
          <p>
            cara kerja REST API adalah merespon permintaan dari Request client
            side yang kemudian diteruskan ke server. setelah itu API akan
            menerima respon dari server yang akan diteruskan kembali client side
            menggunakan protokol komunikasi yang sama, misal nya melalui HTTP.
            respon tersebut berupa manipulasi data dan represntasi (JSON atau
            XML)
          </p>
        </Grid>
      </Grid>
      <Grid xs className={style.main_list}>
        <Link href="/list" className={style.do_list}>
          Go to Add List
        </Link>
      </Grid>
    </div>
  );
};

export default MyMain;
