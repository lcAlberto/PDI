import moment from "moment";

export function formatDurationVideo (duration: string) {
    if (!duration)
        return
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    if (!match)
        return 'Desconhecida';
    const hours = match[1] ? match[1].slice(0, -1) + ':' : '';
    const minutes = match[2] ? match[2].slice(0, -1) + ':' : '';
    const seconds = match[3] ? match[3].slice(0, -1) : '';

    return hours + minutes + seconds;
}