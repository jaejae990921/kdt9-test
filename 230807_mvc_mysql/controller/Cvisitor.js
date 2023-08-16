const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
    res.render('index');
};

// 방명록 전체 보이기
exports.getVisitors = (req, res) => {
    Visitor.getVisitors((rows) => {
        res.render('visitor', { data: rows });
    });
};

// 방명록 하나 조회
exports.getVisitor = (req, res) => {
    Visitor.getVisitor(req.query.id, (rows) => {
        res.render('visitor', { data: rows });
    });
}

// 방명록 하나 생성
exports.postVisitor = (req, res) => {
    Visitor.postVisitor(req.body, (result) => {
        res.send({ id: result.insertId, name: req.body.name, comment: req.body.comment });
    });
}

// 방명록 하나 수정
exports.patchVisitor = (req, res) => {
    Visitor.patchVisitor(req.body, () => {
        res.send({ result: true });
    });
}

// 방명록 하나 삭제
exports.deleteVisitor = (req, res) => {
    Visitor.deleteVisitor(req.body, () => {
        res.send({ result: true });
    });
};