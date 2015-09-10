describe('countUp', function() {
    it("counts to a number by one", function(){
        expect(countUpTo(1,10)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("starts counting from countUp to countTo by countUp", function(){
        expect(countUpTo(5,25)).to.eql([5,10,15,20,25]);
    });

    it("starts counting from countUp to countTo by countUp when the countUp is not a factor of countTo", function(){
        expect(countUpTo(5,24)).to.eql([5,10,15,20]);
    });
});
