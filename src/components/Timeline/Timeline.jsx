import { Typography } from '@mui/material';

import
{
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent
} from '@mui/lab';

import '@/components/Timeline/Timeline.css';

const CustomTimeline = ({ title, icon, children }) =>
{
    return (
        <Timeline className="timeline">
            {/* Item Header */}
            <TimelineItem className="timeline_firstItem">
                <TimelineSeparator>
                    <TimelineDot className="timeline_dot_header">
                        {icon}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" className="timeline_header">
                        {title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            {children}
        </Timeline>
    );
}

export const CustomTimelineSeparator = () =>
{
    return (
        <TimelineSeparator className="separator_padding">
            <TimelineDot variant="outlined" className="timeline_dot" />
            <TimelineConnector />
        </TimelineSeparator>
    );
}

export default CustomTimeline;
