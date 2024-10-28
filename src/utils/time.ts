import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/fi";

dayjs.extend(localizedFormat);
dayjs.locale("fi");

export default dayjs;
