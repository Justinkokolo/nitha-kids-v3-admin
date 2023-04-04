// Libs
import styled from 'styled-components';

// Utils
import { Spacing } from '../shared/constants/spacing';
import { FontWeight, FontSize } from '../shared/constants/fonts';
import { Color } from '../shared/constants/colors';

export const ActionsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-bottom: ${Spacing.Large};
	z-index: 999999 !important;
`;

export const ActionsRightWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const ColumnsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
`;

export const ColumnsSeparator = styled.div<{ size: Spacing }>`
	width: ${props => (props.size ? props.size : Spacing.Large)};
`;

export const Column = styled.div<{ flex: Number }>`
	${({ flex }) =>
		flex &&
		`
    flex: ${flex};
  `}
`;

export const DefaultWrapper = styled.div<{
	flex: Number;
	rightAligned: Boolean;
}>`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: ${Spacing.XLarge};
	justify-content: flex-start;

	${({ rightAligned }) =>
		rightAligned &&
		`
    justify-content: flex-end;
  `}

	${({ flex }) =>
		flex &&
		`
    flex: ${flex};
  `}
`;

export const Action = styled.span<{
	isDeleteButton: Boolean;
	rightAligned: Boolean;
}>`
	font-size: ${FontSize.XSmall};
	font-weight: ${FontWeight.SemiBold};
	color: ${props => (props.isDeleteButton ? Color.white : Color.textDark)};
	padding: calc(${Spacing.XSmall} + 2px) ${Spacing.Medium};
	background-color: ${props =>
		props.isDeleteButton ? Color.red : Color.lightBlue};
	border: none;
	border-radius: ${Spacing.XSmall};
	cursor: pointer;
	margin-right: ${props => (props.rightAligned === true ? 0 : Spacing.Medium)};
	margin-left: ${props => (props.rightAligned === true ? Spacing.Medium : 0)};

	&:hover {
		opacity: 0.8;
	}
`;

export const FlewColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const FlewWrapColumn = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const FlewRowColumn = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const Container = styled.div`
	width: 1024px;
	margin: 0 auto;

	@media (max-width: 768px) {
		width: 100vw;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Image = styled.img`
	width: 32px;
	height: 32px;
	border-radius: ${Spacing.XSmall};
	margin-right: ${Spacing.Small};
`;
