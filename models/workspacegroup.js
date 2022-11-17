// WorkSpace sequelize 모델 -> db의 테이블 즉, 테이블 그 자체라고 생각. 데이터가 담겨있음
const Sequelize = require('sequelize');

module.exports = class WorkSpaceGroup extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            subUserId: {
                type: Sequelize.INTEGER,
            }
        }, {
                sequelize,
                timestamps: true, // 생성일, 수정일 자동생성
                underscored: false, // 생성일, 수정일 카멜케이스
                modelName: 'WorkSpaceGroup', // js
                tableName: 'workspacegroups', // db 테이블 이름
                paranoid: true, // 삭제한 척 하는것 -> 삭제일 자동생성
                charset: 'utf8', // 한글 입력을 위해서!
                collate: 'utf8_general_ci',
            });
    }
    static associate(db){
    }
}
