import * as moment from 'moment';

export const formatDate = (date, formatting = 'MMM DD, YYYY') => moment(date).format(formatting);