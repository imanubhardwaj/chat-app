import dayjs from 'dayjs';
import relativePlugin from 'dayjs/plugin/relativeTime';
import localizedPlugin from 'dayjs/plugin/localizedFormat';

dayjs.extend(relativePlugin);
dayjs.extend(localizedPlugin);
